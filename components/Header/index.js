import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Popover
        className={`block tablet:hidden mt-5 ${visible ? "" : "hidden"}`}
      >
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="Theme icon"
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu icon"
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1 gap-4">
                  <Button onClick={handleWorkScroll}>Projects</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:limoudom2001@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:limoudom2001@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:limoudom2001@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden tablet:flex items-center justify-between sticky top-0 z-10 ${
          visible ? "" : "hidden"
        } ${theme === "light" ? "bg-white" : ""} dark:text-white`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex gap-4">
            <Button onClick={handleWorkScroll}>Projects</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")}>Resume</Button>
            )}
            <Button
              onClick={() => window.open("mailto:limoudom2001@gmail.com")}
            >
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Theme icon"
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex gap-4">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")}>Resume</Button>
            )}
            <Button
              onClick={() => window.open("mailto:limoudom2001@gmail.com")}
            >
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Theme icon"
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
