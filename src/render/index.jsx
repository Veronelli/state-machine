import { TextTag } from "../types/TagType";

export function renderTextByTag(tag, text){
    const componentsTags = {
        [TextTag.P]: <p>{text}</p>,
        [TextTag.H1]: <h1>{text}</h1>,
        [TextTag.H2]: <h2>{text}</h2>,
        [TextTag.H3]: <h3>{text}</h3>,
        [TextTag.H4]: <h4>{text}</h4>,
        [TextTag.H5]: <h5>{text}</h5>,
        [TextTag.H6]: <h6>{text}</h6>,
    }
    return componentsTags[tag]
}

export function renderData(data){
    return data.map((item) => renderTextByTag(item.tag, item.text))
}

