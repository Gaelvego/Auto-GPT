import React, { useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import TechWindow from './TechWindow';

const Map = ({ data, onTechnologyClick }) => {
  const svgRef = useRef(null);
  const [clickedTechnology, setClickedTechnology] = useState(null);


  useEffect(() => {
    const width = 658;
    const height = width;
    

    const color = d3.scaleLinear()
      .domain([0, 5])
      .range(["black", "red"])
      .interpolate(d3.interpolateHcl);

    const pack = data => d3.pack()
      .size([width, height])
      .padding(3)
      (d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value));
    const root = pack(data);

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .attr("style", `max-width: 100%; height: auto; display: block; margin: 0 -14px; background: black; cursor: pointer;`);

    const node = svg.append("g")
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .join("circle")
      .attr("fill", d => d.children ? color(d.depth) : "white")
      .attr("pointer-events", d => !d.children ? null : null)
      .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { d3.select(this).attr("stroke", null); })
      //.on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()))
      .on("click", (event, d) => {
        if (!d.children && d == focus) {
            //setClickedTechnology(d.data.name);  
            onTechnologyClick(d.data.name);          
        } else {
            zoom(event, d);
        }
        event.stopPropagation();
      });

    const label = svg.append("g")
      .style("font", "30px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
        
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .text(d => d.data.name);

    svg.on("click", (event) => zoom(event, root));
    let focus = root;
    let view;
    zoomTo([focus.x, focus.y, focus.r * 2]);

    function zoomTo(v) {
      const k = width / v[2];

      view = v;

      label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)

        node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
            .style("fill", d => d.depth === 1 ? "solid color" : color(d.depth))
            .attr("r", d => d.r * k);

    }

    function zoom(event, d) {
        const clickedNode = d;
        const currNode = focus;

        const isDirectChild = currNode.children && currNode.children.includes(clickedNode);
        const isDirectParent = clickedNode.children && clickedNode.children.includes(currNode);

        if (isDirectChild || isDirectParent){

            const focus0 = focus;

            focus = d;

            const transition = svg.transition()
                .duration(event.altKey ? 7500 : 750)
                .tween("zoom", d => {
                const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                return t => zoomTo(i(t));
                });

            label
                .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
                .transition(transition)
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
            
    }}
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Map;
