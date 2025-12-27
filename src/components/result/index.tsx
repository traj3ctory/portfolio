import { Result, ResultProps } from "antd";

/**
 * @author traj3ctory
 * @function @AppResult
 **/

export default function AppResult({ ...rest }: ResultProps) {
  return <Result {...rest} />;
}
