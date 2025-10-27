"use client";
import React, { useEffect, useMemo, useState } from "react";
import { services2 } from "../../data/Services";
import { projects2 } from "../../data/Projects";
import { blogs2 } from "../../data/Blogs";
import Header3 from "@/app/components/header3";
import ServiceInfo1 from "@/app/components/service_info1";
import BlogInfo1 from "@/app/components/blog_info1";
import ProjectInfo1 from "@/app/components/project_info1";
import { useAppContext } from "@/context";
function FullInfo({ params }) {
  const { setLoaderToggel } = useAppContext();
  const paramData = useMemo(
    () => (params ? params.id.split("-") : ["home", "info", 0]),
    [params]
  );
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    setInfoData(
      paramData[1] === "service_info"
        ? services2[+paramData[2] - 1]
        : paramData[1] === "project_info" && paramData[3]
        ? projects2.filter((project) => project.forBrand === paramData[3])[
            +paramData[2] - 1
          ]
        : paramData[1] === "blog_info"
        ? blogs2[+paramData[2] - 1]
        : paramData[1] === "project_info"
        ? projects2[+paramData[2] - 1]
        : null
    );
  }, [paramData]);

  useEffect(() => {
    setTimeout(() => {
      setLoaderToggel(false);
    }, 2000);
  }, []);

  return (
    <>
      {paramData[1] === "blog_info" ? (
        <Header3
          _dynamic1={paramData[0]}
          _dynamic2={paramData[1]}
          infoData2={infoData}
        />
      ) : (
        <Header3
          _dynamic1={paramData[0]}
          _dynamic2={paramData[1]}
          infoData2={null}
        />
      )}
      {paramData[1] === "service_info" ? (
        <ServiceInfo1 serviceInfoData={infoData} />
      ) : (
        ""
      )}
      {paramData[1] === "blog_info" ? (
        <BlogInfo1 blogInfoData={infoData} />
      ) : (
        ""
      )}
      {paramData[1] === "project_info" ? (
        <ProjectInfo1 projectInfoData={infoData} />
      ) : (
        ""
      )}
    </>
  );
}

export default FullInfo;
