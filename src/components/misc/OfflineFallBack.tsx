import { ExclamationCircleOutlined } from "@/assets/Icon";

/**
 * @author traj3ctory
 * @function @OfflineFallBack
 **/

export default function OfflineFallBack() {
  return (
    <section className="error">
      <div className="flex flex-col items-center justify-center shadow-lg rounded-md p-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h1 className="text-2xl font-bold mb-4">You are offline</h1>
        <p>Please check your internet connection and try again.</p>
        <br />
        <ExclamationCircleOutlined />
      </div>
    </section>
  );
}
