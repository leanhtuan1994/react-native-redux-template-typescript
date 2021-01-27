import reducer, { actions, namespace } from "./setting.slice";
import { default as saga } from "./setting.saga";

const setting = { actions, namespace, reducer, saga };

export default setting;
