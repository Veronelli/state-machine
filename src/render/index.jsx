import { TextTag } from "../types/TagType";

export function renderTextByTag(tag, text, id){
    const componentsTags = {
        [TextTag.P]: <p key={id}>{text}</p>,
        [TextTag.H1]: <h1 key={id}>{text}</h1>,
        [TextTag.H2]: <h2 key={id}>{text}</h2>,
        [TextTag.H3]: <h3 key={id}>{text}</h3>,
        [TextTag.H4]: <h4 key={id}>{text}</h4>,
        [TextTag.H5]: <h5 key={id}>{text}</h5>,
        [TextTag.H6]: <h6 key={id}>{text}</h6>,
    }
    return componentsTags[tag]
}

export function renderData(data){
    return data.map((item) => renderTextByTag(item.tag, item.text, item.id))
}

