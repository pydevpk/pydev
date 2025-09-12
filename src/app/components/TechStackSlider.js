// components/TechStackSlider.js
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TechCard from "./TechCard";

import PythonIcon from "../../../public/techs/Python.png"
import JavaScriptIcon from "../../../public/techs/JavaScript.png"
import SQLDeveloperIcon from "../../../public/techs/SQLDeveloper.png"
import DjangoIcon from "../../../public/techs/Django.png"
import FlaskIcon from "../../../public/techs/Flask.png"
import FastAPIIcon from "../../../public/techs/FastAPI.png"
import PandasIcon from "../../../public/techs/Pandas.png"
import NumPyIcon from "../../../public/techs/NumPy.png"
import scikitLearnIcon from "../../../public/techs/scikit-learn.png"
import PyTorchIcon from "../../../public/techs/PyTorch.png"
import TensorFlowIcon from "../../../public/techs/TensorFlow.png"
import OpenCVIcon from "../../../public/techs/OpenCV.png"
import KerasIcon from "../../../public/techs/Keras.png"
import NextJsIcon from "../../../public/techs/Next.js.png"
import ReactIcon from "../../../public/techs/React.png"
import NodeJsIcon from "../../../public/techs/Node.js.png"
import ExpressJsIcon from "../../../public/techs/Express.png"
import MongoDBIcon from "../../../public/techs/MongoDB.png"
import PostgresSQLIcon from "../../../public/techs/PostgresSQL.png"
import MySQLIcon from "../../../public/techs/MySQL.png"
import SQLiteIcon from "../../../public/techs/SQLite.png"
import RedisIcon from "../../../public/techs/Redis.png"
import HTML5Icon from "../../../public/techs/HTML5.png"
import CSS3Icon from "../../../public/techs/CSS3.png"
import JQueryIcon from "../../../public/techs/jQuery.png"
import ElasticSearchIcon from "../../../public/techs/ElasticSearch.png"
import BootstrapIcon from "../../../public/techs/Bootstrap.png"
import TailwindCSSIcon from "../../../public/techs/TailwindCSS.png"
import KubernetesIcon from "../../../public/techs/Kubernetes.png"
import NGINXIcon from "../../../public/techs/NGINX.png"
import DockerIcon from "../../../public/techs/Docker.png"
import GitHubActionsIcon from "../../../public/techs/GitHubActions.png"
import GitHubIcon from "../../../public/techs/GitHub.png"
import GitIcon from "../../../public/techs/Git.png"
import SeleniumIcon from "../../../public/techs/Selenium.png"
import AWSIcon from "../../../public/techs/AWS.png"
import DigitalOceanIcon from "../../../public/techs/DigitalOcean.png"
import GoogleCloudIcon from "../../../public/techs/GoogleCloud.png"

const techs = [
    {
        logo: <Image src={PythonIcon} alt="Python Icon" width={100} height={100} />,
        name: "Python",
        description: "Collaborative design tool",
    },
    {
        logo: <Image src={JavaScriptIcon} alt="JavaScript Icon" width={100} height={100} />,
        name: "JavaScript",
        description: "Instantly share video messages",
    },
    {
        logo: <Image src={SQLDeveloperIcon} alt="SQL Icon" width={100} height={100} />,
        name: "SQL",
        description: "React framework for web apps",
    },
    {
        logo: <Image src={DjangoIcon} alt="Django Icon" width={100} height={100} />,
        name: "Django",
        description: "Utility-first CSS framework",
    },
    {
        logo: <Image src={FlaskIcon} alt="Flask Icon" width={100} height={100} />,
        name: "Flask",
        description: "Modern slider library",
    },
    {
        logo: <Image src={FastAPIIcon} alt="FastAPI Icon" width={100} height={100} />,
        name: "FastAPI",
        description: "Modern slider library",
    },
    {
        logo: <Image src={PandasIcon} alt="Pandas Icon" width={100} height={100} />,
        name: "Pandas",
        description: "Modern slider library",
    },
    {
        logo: <Image src={NumPyIcon} alt="Numpy Icon" width={100} height={100} />,
        name: "Numpy",
        description: "Modern slider library",
    },
    {
        logo: <Image src={scikitLearnIcon} alt="Scikit-learn Icon" width={100} height={100} />,
        name: "Scikit-learn",
        description: "Modern slider library",
    },
    {
        logo: <Image src={PyTorchIcon} alt="PyTorch Icon" width={100} height={100} />,
        name: "PyTorch",
        description: "Modern slider library",
    },
    {
        logo: <Image src={TensorFlowIcon} alt="TensorFlow Icon" width={100} height={100} />,
        name: "TensorFlow",
        description: "Modern slider library",
    },
    {
        logo: <Image src={OpenCVIcon} alt="OpenCV Icon" width={100} height={100} />,
        name: "OpenCV",
        description: "Modern slider library",
    },
    {
        logo: <Image src={KerasIcon} alt="Keras Icon" width={100} height={100} />,
        name: "Keras",
        description: "Modern slider library",
    },
    {
        logo: <Image src={NextJsIcon} alt="Next.Js Icon" width={100} height={100} />,
        name: "Next.Js",
        description: "Modern slider library",
    },
    {
        logo: <Image src={ReactIcon} alt="React.Js Icon" width={100} height={100} />,
        name: "React.Js",
        description: "Modern slider library",
    },
    {
        logo: <Image src={NodeJsIcon} alt="Node.Js Icon" width={100} height={100} />,
        name: "Node.Js",
        description: "Modern slider library",
    },
    {
        logo: <Image src={ExpressJsIcon} alt="Express.Js Icon" width={100} height={100} />,
        name: "Express.Js",
        description: "Modern slider library",
    },
    {
        logo: <Image src={MongoDBIcon} alt="MongoDB Icon" width={100} height={100} />,
        name: "MongoDB",
        description: "Modern slider library",
    },
    {
        logo: <Image src={PostgresSQLIcon} alt="PostgresSQL Icon" width={100} height={100} />,
        name: "PostgresSQL",
        description: "Modern slider library",
    },
    {
        logo: <Image src={MySQLIcon} alt="MySQL Icon" width={100} height={100} />,
        name: "MySQL",
        description: "Modern slider library",
    },
    {
        logo: <Image src={SQLiteIcon} alt="SQLite Icon" width={100} height={100} />,
        name: "SQLite",
        description: "Modern slider library",
    },
    {
        logo: <Image src={RedisIcon} alt="Redis Icon" width={100} height={100} />,
        name: "Redis",
        description: "Modern slider library",
    },
    {
        logo: <Image src={ElasticSearchIcon} alt="Elastic Search Icon" width={100} height={100} />,
        name: "Elastic Search",
        description: "Modern slider library",
    },
    {
        logo: <Image src={HTML5Icon} alt="HTML Icon" width={100} height={100} />,
        name: "HTML",
        description: "Modern slider library",
    },
    {
        logo: <Image src={CSS3Icon} alt="CSS Icon" width={100} height={100} />,
        name: "CSS",
        description: "Modern slider library",
    },
    {
        logo: <Image src={JQueryIcon} alt="jQuery Icon" width={100} height={100} />,
        name: "jQuery",
        description: "Modern slider library",
    },
    {
        logo: <Image src={BootstrapIcon} alt="Bootstrap Icon" width={100} height={100} />,
        name: "Bootstrap",
        description: "Modern slider library",
    },
    {
        logo: <Image src={TailwindCSSIcon} alt="Tailwind CSS Icon" width={100} height={100} />,
        name: "Tailwind CSS",
        description: "Modern slider library",
    },
    {
        logo: <Image src={KubernetesIcon} alt="Kubernetes Icon" width={100} height={100} />,
        name: "Kubernetes",
        description: "Modern slider library",
    },
    {
        logo: <Image src={NGINXIcon} alt="NGINX Icon" width={100} height={100} />,
        name: "NGINX",
        description: "Modern slider library",
    },
    {
        logo: <Image src={DockerIcon} alt="Docker Icon" width={100} height={100} />,
        name: "Docker",
        description: "Modern slider library",
    },
    {
        logo: <Image src={GitHubActionsIcon} alt="GitHub Actions Icon" width={100} height={100} />,
        name: "GitHub Actions",
        description: "Modern slider library",
    },
    {
        logo: <Image src={GitHubIcon} alt="GitHub Icon" width={100} height={100} />,
        name: "GitHub",
        description: "Modern slider library",
    },
    {
        logo: <Image src={GitIcon} alt="Git Icon" width={100} height={100} />,
        name: "Git",
        description: "Modern slider library",
    },
    {
        logo: <Image src={SeleniumIcon} alt="Selenium Icon" width={100} height={100} />,
        name: "Selenium",
        description: "Modern slider library",
    },
    {
        logo: <Image src={AWSIcon} alt="AWS Icon" width={100} height={100} />,
        name: "AWS",
        description: "Modern slider library",
    },
    {
        logo: <Image src={DigitalOceanIcon} alt="Digital Ocean" width={100} height={100} />,
        name: "Digital Ocean",
        description: "Modern slider library",
    },
    {
        logo: <Image src={GoogleCloudIcon} alt="Google Cloud" width={100} height={100} />,
        name: "Google Cloud",
        description: "Modern slider library",
    },
];

export default function TechStackSlider() {
    return (
        <div className="border-left-main border-right-main max-w-4xl mx-auto p-5 lg:p-15 relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <h2 className="text-white text-4xl font-bold text-center mb-10">
                Tech Stack
            </h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                loop={true}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
            >
                {techs.map((tech, i) => (
                    <SwiperSlide key={i}>
                        <TechCard {...tech} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}