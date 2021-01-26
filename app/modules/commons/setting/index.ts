import { actions, namespace, reducer } from "./setting.slice";
import { default as saga } from "./setting.saga";

const setting = { actions, namespace, reducer, saga };

export default setting;
