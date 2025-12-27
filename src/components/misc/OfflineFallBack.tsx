import { ExclamationCircleOutlined } from "~/assets/Icon";

/**
 * @author traj3ctory
 * @function @OfflineFallBack
 **/

export default function OfflineFallBack() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/misc/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-10 bg-surface dark:bg-surface-elev ">
        <h1 className="text-2xl font-bold mb-4">You are offline</h1>
        <p>Please check your internet connection and try again.</p>
        <br />
        <ExclamationCircleOutlined />
      </div>
    </section>
  );
}
