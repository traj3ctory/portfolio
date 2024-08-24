import { ExclamationCircleOutlined } from "@/assets/Icon";

/**
 * @author traj3ctory
 * @function @OfflineFallBack
 **/

export default function OfflineFallBack() {
  return (
    <section className="error">
      <div className="flex_center flex-col shadow-lg rounded-md p-10 bg_white">
        <h1 className="text-2xl font-bold mb-4">You are offline</h1>
        <p>Please check your internet connection and try again.</p>
        <br />
        <ExclamationCircleOutlined />
      </div>
    </section>
  );
}
