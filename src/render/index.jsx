import { useState } from "react";
import { HTMLTag } from "../types/TagType";

export function RenderFormFields(field) {
  const [fieldValue, setFieldValue] = useState("");
  const onSetFieldValue = (event) => {
    setFieldValue(event.target.value);
  };
  const fieldComponentTag = {
    [HTMLTag.INPUT]: () => (
      <input
        key={field.id}
        type={field.id}
        placeholder={field.placeholder}
        onChange={(event) => onSetFieldValue(event)}
      />
    ),
    [HTMLTag.SELECT]: () => <select></select>,
  };
  return {
    fieldComponent: fieldComponentTag[field.tag](),
    [field.fieldName]: fieldValue,
  };
}

export function RenderForm({ item }) {
  let formData = {
    components: [],
    [item.formName]: {},
  };
  item.fields.forEach((field) => {
    formData.components.push(RenderFormFields(field).fieldComponent);
    formData[item.formName] = {
      ...formData[item.formName],
      [field.fieldName]: field.fieldValue,
    };
  });
  return {
    component: (
      <form
        className={`flex ${item.orientation == "column" ? "flex-col" : ""}`}
        key={item.id}
      >
        {formData.components}
      </form>
    ),
    fields: formData[item.formName],
  };
}

export function RenderByTag(item) {
  const componentsTags = {
    [HTMLTag.P]: { component: () => <p key={item.id}>{item.text}</p> },
    [HTMLTag.H1]: { component: () => <h1 key={item.id}>{item.text}</h1> },
    [HTMLTag.H2]: { component: () => <h2 key={item.id}>{item.text}</h2> },
    [HTMLTag.H3]: { component: () => <h3 key={item.id}>{item.text}</h3> },
    [HTMLTag.H4]: { component: () => <h4 key={item.id}>{item.text}</h4> },
    [HTMLTag.H5]: { component: () => <h5 key={item.id}>{item.text}</h5> },
    [HTMLTag.H6]: { component: () => <h6 key={item.id}>{item.text}</h6> },
    [HTMLTag.FORM]: () => RenderForm({ item: item }),
  };
  const component = componentsTags[item.tag];
  if (item.tag === HTMLTag.FORM) {
    const componentInstanced = component();
    console.log(componentInstanced);
    return {
      component: componentInstanced.component,
      formName: componentInstanced.fields,
    };
  }
  return { component: component.component() };
}

export function RenderData(data) {
  let renderedData = {
    components: [],
    formFields: {},
  };
  data.forEach((item) => {
    const componentRender = RenderByTag(item);
    renderedData.components.push(componentRender.component);
    if (componentRender.formName) {
      renderedData.formFields = {
        ...renderedData.formFields,
        formFields: componentRender.formName,
      };
    }
  });
  return renderedData;
}
