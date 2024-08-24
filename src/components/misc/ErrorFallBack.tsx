import {
  ArrowLeftOutlined,
  ReloadOutlined
} from "@/assets/Icon";
import AppButton from "@/components/button";
import SimpleLayout from "./SimpleLayout";

interface ErrorFallbackProps {
  error?: Error;
}

/**
 * @author traj3ctory
 * @function @ErrorFallback
 **/

export default function ErrorFallback({ error }: ErrorFallbackProps) {


  return (
    <SimpleLayout>
      <section className="error">
        <div className="flex_center flex-col shadow-lg rounded-md p-10 bg_white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <div className="flex items-center gap-2 my-2">
            <p className="text-sm font-semibold uppercase">
              {error?.name || ""}&nbsp;:&nbsp;
            </p>
            <p className="text-base">{error?.message || ""}</p>
          </div>
          <div className="d-flex gap-2 mt-lg-5 mt-3">
            <AppButton
              onClick={() => window.history.back()}
              text="Go back"
              icon={<ArrowLeftOutlined />}
            />
            <AppButton
              onClick={() => window.location.reload()}
              text="Reload"
              type="default"
              icon={<ReloadOutlined />}
            />
          </div>
        </div>
      </section>
    </SimpleLayout>
  );
}
