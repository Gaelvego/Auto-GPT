rag = """Information: {context}

Question: {question}"""


def get_enterprise_category_template(tool, context):
    enterprise_cat_template = f"""We are talking about {tool}. Based on what it is and what it offers,the main business domain and task that most characterizes the tools purpose,  please return the category in which it best fits. You can only choose from the given Categories. Strictly return ONLY the category name. Here you have more context: \n{context}.
    Categories:
    - Marketing - Content Generation: Generates personalized content for marketing campaigns, including ad copy, social media posts, and email content.
    - Marketing - Visuals Generation: Generates images and videos that align with the brand's visual identity and message.
    - Marketing - Speech Generation: Generates natural-sounding speech for voiceovers, virtual assistants, and interactive marketing materials.
    - Marketing - Customer Insights: Analyzes customer data to provide insights for targeted marketing strategies.
    - Finance - Fraud Detection: Identifies anomalies and patterns to prevent fraudulent activities in financial transactions, including credit card fraud, money laundering, and insider trading.
    - Finance - Investment Strategy: Develops investment strategies that optimize risk and return using historical data and market trends.
    - Finance - Forecasting: Identifies financial outcomes from historical data like economic indicators and industry trends.
    - People - Talent Acquisition: Identifies potential candidates based on skills, experience, and cultural fit.
    - People - Employee Engagement: Improves employee engagement by generating personalized feedback, recognition, and development plans.
    - People - Performance Management: Provides personalized insights and suggestions for enhancing employee performance from individual metrics, goals, and feedback.
    - Development - Technical Documentation: Analyzes code and algorithms to generate code comments and technical documentation.
    - Development - Code Writing: Generates and suggests code snippets.
    - Development - Testing and debugging: Tests and debugs code automatically.
    - Development - Deployment Automation: Improves the orchestration of the code release pipeline.
    - Design - Wireframing and prototyping: Generates prototypes, wireframes, and  interactive components.
    - Design - Visuals Generation: Generates variations and concepts for images, animations, and videos from art-style models.
    - Operations - Data reports: Analyzes data to generate reports and insights using data analytics.
    - Operations - Procedures Generation: Generates guidelines and procedures to ensure consistent operations.
    - Operations - Customer Support: Generates responses and solutions for customer support queries.
    - General Purpose: Provides useful functionality in a wide range of contexts, including project management, communication tools, collaboration platforms, and productivity.
    Note: Return ONLY the category name. Choose only from the options given."""
    return enterprise_cat_template


def get_gen_ai_category_template(tool, context):
    gen_ai_cat_template = f"""We are talking about {tool}. Based on what it is, the type of content that the Generative AI tool generates, and what it offers, please return the category that best fits. (Do not make up categories)
    Here you have more context: {context}:
    Categories:
    - Text: Generates written content, including articles, creative writing, and general documentation.
    - Code: Generates code snippets, scripts, and complete programs.
    - Image: Generates images, artwork, or visual content.
    - Video: Generates videos integrating images, animations, and effects.
    - Music and Sound: Composes music and audio, imitating diverse styles and instruments.
    - Voice: Synthesizes human-like speech including voiceovers and virtual assistants.
    - 3D: Generates three-dimensional figures representing objects, characters, and environments.
    - Data: Generates and analyzes data sets.
    - Simulation: Simulates real-world scenarios, including physical systems and population dynamics for research and analysis.
    Note: Return ONLY the category name, ONLY ONE no introduction or words besides the category name. It's mandatory to choose MINIMUM ONE AND MAXIMUM ONE."""
    return gen_ai_cat_template


def ecosystem_category_template(tool, context):
    ecosystem_cat_template = f"""We are talking about {tool}. Based on what it is and what it offers (context: {context}), the AI tool's technical role in content generation, please return the category in which it best fits for Generative AI Ecosystem Layer. You can only choose from the given Categories. Strictly return ONLY the category name.
    Can accept only one of the following options:
    - Foundation Models: Tools that generate new data, content, or designs based on input data or specified parameters.
    - Cloud Services: Tools or APIs that grant access to Generative AI models.
    - Mashup Tools: Tools that connect multiple models enabling complex workflows.
    - Applications: Tools with Generative AI embedded within their features and workflows.
    - Data and Integration Services: Tools that enable applications to interact with other Generative AI tools, such as SDKs, APIs, or middleware services.
    - Infrastructure: Tools that deploy and enhance Generative AI tools, involving  infrastructure provisioning, compute hardware, and algorithms that optimize performance and manage operational costs.

    """
    return ecosystem_cat_template


def get_description_template(tool, context):
    description_template = (
        f"""We are talking about the tool {tool}. """
        f"""Based on the following information: \n{context}, """ 
        f"""please return a concise and informative description."""
    )
    return description_template


def get_license_template(tool):
    license_template = f"""We are talking about {tool}. Based on what it is and the available Generative AI tool free version option, please return the category in which it best fits. Strictly return the ONLY category name.
    Categories:
    - Open Source: The tool's source code is available to the public, allowing users to modify and distribute it under open-source licenses.
    - Proprietary: The tool's source code is owned by the developer or company, and its usage is subject to proprietary terms and conditions.
    - Not Found: Determines that the Generative AI tool’s reference URL doesn’t state or hint the Generative AI tool’s licensing type.
    Note: Refers to the licesing type. If it can be implemented commercially, or just for research, etc.
    """
    return license_template

def get_explicit_content_template(tool, context):
    explicit_content_template = f"""Based on the information provided about the AI tool '{tool}' and its context:

    {context}

    Does the tool or its content have any association with explicit content, adult themes, or anything unsuitable for a general audience? Respond with either 'Explicit' or 'NonExplicit'.
    """
    return explicit_content_template


def get_prompts(tool, context):
    """
    Returns a list of tuples containing prompt keys and their respective templates for a given tool.

    :param tool: The tool for which prompts are generated.
    :param context: The context information (snippets and description) for the tool.
    :return: List of tuples (prompt_key, prompt_template)
    """
    prompts = [
        ("Primary Enterprise Category", get_enterprise_category_template(tool, context)),
        ("Content Type", get_gen_ai_category_template(tool, context)),
        ("Generative AI Ecosystem Layer", ecosystem_category_template(tool, context)),
        ("Tool Description", get_description_template(tool, context)),
        ("Licensing Type", get_license_template(tool)),
        ("Explicit Content", get_explicit_content_template(tool, context))
    ]
    return prompts