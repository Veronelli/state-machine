import { HTMLTag } from "../types/TagType";

export function renderFormFields(field) {
  const fieldComponentTag = {
    [HTMLTag.INPUT]: () => (
      <input key={field.id} type={field.id} placeholder={field.placeholder} />
    ),
    [HTMLTag.SELECT]: () => <select></select>,
  };
  return fieldComponentTag[field.tag]();
}

export function renderByTag(item) {
  const componentsTags = {
    [HTMLTag.P]: () => <p key={item.id}>{item.text}</p>,
    [HTMLTag.H1]: () => <h1 key={item.id}>{item.text}</h1>,
    [HTMLTag.H2]: () => <h2 key={item.id}>{item.text}</h2>,
    [HTMLTag.H3]: () => <h3 key={item.id}>{item.text}</h3>,
    [HTMLTag.H4]: () => <h4 key={item.id}>{item.text}</h4>,
    [HTMLTag.H5]: () => <h5 key={item.id}>{item.text}</h5>,
    [HTMLTag.H6]: () => <h6 key={item.id}>{item.text}</h6>,
    [HTMLTag.FORM]: () => (
      <form
        className={`flex ${item.orientation == "column" ? "flex-col" : ""}`}
        key={item.id}
      >
        {item.fields.map((field) => renderFormFields(field))}
      </form>
    ),
  };
  const component = componentsTags[item.tag];
  return component();
}

export function renderData(data) {
  return data.map((item) => renderByTag(item));
}
