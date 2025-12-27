import { LeftCircleOutlined } from "~/assets/Icon";
import { AppButton, AppResult } from "~/components";
import SimpleLayout from "./SimpleLayout";

/**
 * @author traj3ctory
 * @function @NotFound
 **/

const NotFound = () => {
  return (
    <SimpleLayout title="Not Found">
      <div className="min-h-[100dvh] flex items-center justify-center">
        <AppResult
          status="404"
          title={
            <h1 className="text-3xl mb-4">404&ensp;|&ensp;Page Not Found</h1>
          }
          subTitle={
            <p>
              The requested URL{" "}
              <code className="text-danger">{location.href}</code> was not
              found.
            </p>
          }
          extra={
            <div className="flex items-center justify-center">
              <AppButton
                htmlType="button"
                onClick={() => window.history.back()}
                icon={<LeftCircleOutlined color="#fff" />}
                text="Go Back"
              />
            </div>
          }
        />
      </div>
    </SimpleLayout>
  );
};

export default NotFound;
