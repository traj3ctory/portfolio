import Coding from "@/data/coding.json";
import data from "@/data/data.json";
import DisplayLottie from "./DisplayLottie";
import SocialMedia from "./Social";

const Main = () => {
  const name = data?.name ?? {};
  const fullName = `${name.lastName ?? ""} ${name.middleName ?? ""} ${
    name.firstName ?? ""
  }`.trim();
  const job = name.job ?? "Software Engineer";

  return (
    <main
      id="home_page"
      className="relative min-h-[80dvh] flex items-center py-10"
    >
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 px-4 lg:px-12">
        <div className="flex items-center col-span-1">
          <aside className="w-full flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white/5 dark:bg-black/20 p-6 border border-gray-300/30 dark:border-gray-600 rounded-md">
              <div className="w-full">
                <h4 className="text-sm text-gray-400 mb-1">
                  Hello there, I am
                </h4>
                <h1 className="text-3xl lg:text-4xl font-semibold mb-2">
                  {fullName}
                </h1>
                <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                  {job}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  {data?.description}.
                </p>
                <SocialMedia />
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full col-span-1 flex items-center justify-center">
          <div className="animation_container w-full max-w-lg">
            <div className="animation">
              <DisplayLottie animationData={Coding} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
