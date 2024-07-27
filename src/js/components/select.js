import Choices from "choices.js";
import vars from "../_vars.js";

vars.selectElems?.forEach(select => {
  new Choices(select, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
  });
})
