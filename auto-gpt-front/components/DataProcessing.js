
export default function processData (data) {
    const result = {
        name: 'root',
        children: []
    };

    const dataMap = new Map();
    data.forEach((item) => {
        const category = item.proposito;
        const contentType = item.type_content;

        if (!dataMap.has(contentType)) {
            dataMap.set(contentType, new Map());
        }
        const contentMap = dataMap.get(contentType);

        if (!contentMap.has(category)) {
            contentMap.set(category, []);
        }
    
        contentMap.get(category).push(item);
    });
    const nestedStructure = [];

    // Transform grouped data into nested structure
    for (const [contentID, contentChildren] of dataMap.entries()) {
        const contentObj = {
            name: contentID,
            children: []
        };

        for (const [category, items] of contentChildren) {
            const categoryObj = {
                name: category,
                children: []
            };
    
            items.forEach((item) => {
                const aiObj = {
                    name: item.ai_name,
                    value: 1
                };
                categoryObj.children.push(aiObj);
            });
    
            contentObj.children.push(categoryObj);
        }
    
        nestedStructure.push(contentObj);
    }
    result.children = (nestedStructure);
    //console.log(result);

    return result;
}
