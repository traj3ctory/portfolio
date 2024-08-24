import { EffectCallback, useEffect } from "react";

/**
 * @author traj3ctory
 * @function @useEffectOnce
 **/
const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};
export default useEffectOnce;
