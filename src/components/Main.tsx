import Coding from "~/data/coding.json";
import data from "~/data/data.json";
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
      className="relative min-h-[85dvh] flex items-center py-16 lg:py-20"
    >
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-16 px-4 lg:px-12">
        <div className="flex items-center col-span-1 order-2 lg:order-1">
          <aside className="w-full flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-primary">
                Available for new opportunities
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted mb-2 uppercase tracking-wider">
                  Hello, I'm
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-up">
                  {fullName}
                </h1>
                <p
                  className="text-xl lg:text-2xl text-primary font-semibold mb-3 animate-fade-up"
                  style={{ animationDelay: "80ms" }}
                >
                  {job}
                </p>
                <p
                  className="text-base text-muted leading-relaxed max-w-xl animate-fade-up"
                  style={{ animationDelay: "160ms" }}
                >
                  {data?.description}
                </p>
              </div>

              <SocialMedia />
            </div>
          </aside>
        </div>

        <div className="w-full col-span-1 flex items-center justify-center order-1 lg:order-2">
          <div
            className="relative animate-zoom-in"
            style={{ animationDelay: "120ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            <div className="animation_container w-full max-w-lg relative z-10">
              <div className="animation">
                <DisplayLottie animationData={Coding} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
