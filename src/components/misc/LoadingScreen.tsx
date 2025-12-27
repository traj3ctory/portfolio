import { appName } from "~/constants";

/**
 * @author traj3ctory
 * @function @LoadingPage
 **/

const LoadingPage = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black/10">
      <div className="flex flex-col items-center gap-4">
        <div className="mb-10" aria-hidden>
          <div className="dot-overtaking" />
        </div>
        <h6 data-testid="appName" className="sr-only">
          {appName}
        </h6>
      </div>
    </section>
  );
};

export default LoadingPage;
