import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const TimeAndActivity = [
  { time: "04:00 - 04:15", activity: "Sikshaskatam Prayers" },
  { time: "04:15 - 06:15", activity: "Mantra Meditation" },
  { time: "06:15 - 07:00", activity: "Mangal Aarti" },
  { time: "07:00 - 08:15", activity: "Srimad Bhagvatam Discourse" },
  { time: "09:00 - 13:00", activity: "Darshan opens" },
  { time: "13:00 - 16:00", activity: "Darshan closes" },
  { time: "16:00 - 20:30", activity: "Darshan opens" },
];

const TempleSchedule = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("language") || "en";
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <section className="dark:bg-gray-950 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-red-900 dark:text-white">
            {t("Temple Schedule")}
          </h2>

          <div className="mt-4">
            <span className="inline-flex items-center text-lg font-medium text-primary-600 dark:text-primary-500">
              {t("Lord is anxious to meet you in his home...")}
            </span>
          </div>
        </div>

        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
            {TimeAndActivity.map(({ time, activity }, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
              >
                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  {time}
                </p>
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                  {t(activity)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleSchedule;
