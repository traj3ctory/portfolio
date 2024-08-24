import { appName } from "@/constants";

/**
 * @author traj3ctory
 * @function @LoadingPage
 **/

const LoadingPage = () => {
  return (
    <section className="loading_section">
      <div className="wrapper_loader">
        <div className="snippet mb-10" data-title="dot-overtaking">
          <div className="stage filter-contrast">
            <div className="dot-overtaking" />
          </div>
        </div>
        {/* <AppImage src={miscImages.Me} alt="NPHCDA" width={120} /> */}
        <h6 data-testid="appName" className="hidden">
          {appName}
        </h6>
      </div>
    </section>
  );
};

export default LoadingPage;
