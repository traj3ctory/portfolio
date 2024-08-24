import { Result, ResultProps } from "antd";

interface IProps extends ResultProps {}

/**
 * @author traj3ctory
 * @function @AppResult
 **/

export default function AppResult({ ...rest }: IProps) {
    return <Result {...rest} />;
}
