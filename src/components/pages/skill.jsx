// Skill.jsx
import React from 'react';
import '../styles/pages/skill.css';

import javaIcon from '../../assets/javaicon.svg';
import jsIcon from '../../assets/jsicon.svg';
import pythonIcon from '../../assets/pythonicon.svg';
import gradleIcon from '../../assets/gradleicon.svg';
import postmanIcon from '../../assets/postmanicon.svg';
import dockerIcon from '../../assets/dockericon.svg';
import githubIcon from '../../assets/githubicon.svg';
import gitactionsIcon from '../../assets/gitactionsicon.svg';
import condaIcon from '../../assets/condaicon.svg';
import springbootIcon from '../../assets/springbooticon.svg';
import springscIcon from '../../assets/springscicon.svg';
import springdtIcon from '../../assets/springdticon.svg';
import jspIcon from '../../assets/jspicon.svg';
import jwtIcon from '../../assets/jwticon.svg';
import mybtsIcon from '../../assets/mybtsicon.svg';
import jpaIcon from '../../assets/jpaicon.svg';
import timeleafIcon from '../../assets/timeleaficon.svg';
import mysqlIcon from '../../assets/mysqlicon.svg';
import postsqlIcon from '../../assets/postsqlicon.svg';
import mongodbIcon from '../../assets/mongodbicon.svg';
import redisIcon from '../../assets/redisicon.svg';
import ngxIcon from '../../assets/ngxicon.svg';
import tomcatIcon from '../../assets/tomcaticon.svg';
import awsIcon from '../../assets/awsicon.svg';
import sokIcon from '../../assets/sokticon.svg';
import swgIcon from '../../assets/swgicon.svg';
import fastapiIcon from '../../assets/fastapiicon.svg';
import othIcon from '../../assets/othicon.svg';
import oracleIcon from '../../assets/oracleicon.svg';
import routIcon from '../../assets/routicon.svg';
import sslIcon from '../../assets/sslicon.svg';
import nodeIcon from '../../assets/nodeicon.svg';


const Skill = () => {
  return (
    <div id="skill" className="skill-wrapper">

    <div className="skill-wrapper">
      <h1 className="skill-title">Skill</h1>
      
      <div className="skill-container">
        {/* 상단 박스 */}
        <div className="top-box">
          {/* Core Language */}
          <div className="core-language">
            <h2 className="section-title">Core Language ㄱ</h2>
            <div className="icon-group">
              <div className="skill-item">
                <img src={javaIcon} alt="Java" />
                <div className="tooltip">
                  <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">Java 17</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={jsIcon} alt="JavaScript" />
                <div className="tooltip">
                 <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">JavaScript</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={pythonIcon} alt="Python" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">Python</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dev Tool */}
          <div className="dev-tool">
            <h2 className="section-title">Dev Tool ㄱ</h2>
            <div className="icon-group">
              <div className="skill-item">
                <img src={gradleIcon} alt="Gradle" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">Gradle</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={postmanIcon} alt="Postman" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">Postman</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={dockerIcon} alt="Docker" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">Docker</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={githubIcon} alt="GitHub" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">GitHub</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={gitactionsIcon} alt="GitHub Actions" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">GitHub Actions</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={condaIcon} alt="Conda" />
                <div className="tooltip">
                <span className="tooltip-description" >핵심언어 및 개발도구 ∣ </span> <span className="tooltip-description-sub">개발도구</span>
                  <div className="tooltip-title">Anaconda Navigator</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 그리드 */}
        <div className="grid-container">
        {/* Backend */}
        <div className="grid-item backend">
          <h2 className="section-title">Back-End Framework ㄱ</h2>
          <div className="icon-group">
            <div className="skill-item">
              <img src={springbootIcon} alt="Spring" />
              <div className="tooltip">
                  <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                    <div className="tooltip-title">Spring Boot</div>
                  </div>
                </div>
                <div className="skill-item">
                  <img src={springscIcon} alt="Spring Security" />
                  <div className="tooltip">
                      <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                        <div className="tooltip-title">Spring Security</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={springdtIcon} alt="Spring Data" />
                  <div className="tooltip">
                      <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                        <div className="tooltip-title">Spring Data</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={jpaIcon} alt="JPA" />
                  <div className="tooltip">
                      <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                        <div className="tooltip-title">JPA</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={mybtsIcon} alt="MyBatis" />
                  <div className="tooltip">
                      <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                        <div className="tooltip-title">MyBatis</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={jwtIcon} alt="JWT" />
                  <div className="tooltip">
                      <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                        <div className="tooltip-title">JWT</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={othIcon} alt="OAuth" />
                  <div className="tooltip">
                      <span className="tooltip-description" > 백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                        <div className="tooltip-title">OAuth</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={jsIcon} alt="JavaScript" />
                  <div className="tooltip">
                      <span className="tooltip-description" >백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                      <div className="tooltip-title">JavaScript</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={nodeIcon} alt="Node.js" />
                  <div className="tooltip">
                      <span className="tooltip-description" >백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                      <div className="tooltip-title">Node.js</div>
                      </div>
                </div>
                <div className="skill-item">
                  <img src={fastapiIcon} alt="Fast API" />
                  <div className="tooltip">
                      <span className="tooltip-description" >백엔드 프레임워크 ∣ </span> <span className="tooltip-description-sub">Java</span>
                      <div className="tooltip-title">Fast API</div>
                      </div>
                </div>
              </div>
            </div>

          {/* Frontend */}
          <div className="grid-item">
            <h2 className="section-title">Front-end Skill ㄱ</h2>
            <div className="icon-group">
              <div className="skill-item">
                <img src={jspIcon} alt="JSP" />
                <div className="tooltip">
                  <span className="tooltip-description" >프론트엔드 기술 ∣ </span> <span className="tooltip-description-sub">View Engine</span>
                  <div className="tooltip-title">JSP</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={timeleafIcon} alt="Thymeleaf" />
                <div className="tooltip">
                  <span className="tooltip-description" >프론트엔드 기술 ∣ </span> <span className="tooltip-description-sub">View Engine</span>
                  <div className="tooltip-title">Thymeleaf</div>
                </div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="grid-item">
            <h2 className="section-title">Database ㄱ</h2>
            <div className="icon-group">
            <div className="skill-item">
                <img src={oracleIcon} alt="Oracle" />
                <div className="tooltip">
                  <span className="tooltip-description" >데이터베이스 ∣ </span> <span className="tooltip-description-sub">관계형</span>
                  <div className="tooltip-title">Oracle</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={mysqlIcon} alt="MySQL" />
                <div className="tooltip">
                  <span className="tooltip-description" >데이터베이스 ∣ </span> <span className="tooltip-description-sub">관계형</span>
                  <div className="tooltip-title">MySQL</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={postsqlIcon} alt="PostgreSQL" />
                <div className="tooltip">
                  <span className="tooltip-description" >데이터베이스 ∣ </span> <span className="tooltip-description-sub">관계형</span>
                  <div className="tooltip-title">PostgreSQL</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={mongodbIcon} alt="MongoDB" />
                <div className="tooltip">
                 <span className="tooltip-description" >데이터베이스 ∣ </span> <span className="tooltip-description-sub">NoSQL</span>
                  <div className="tooltip-title">MongoDB</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={redisIcon} alt="Redis" />
                <div className="tooltip">
                 <span className="tooltip-description" >데이터베이스 ∣ </span> <span className="tooltip-description-sub">NoSQL</span>
                  <div className="tooltip-title">Redis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Server */}
          <div className="grid-item">
            <h2 className="section-title">Web Server ㄱ</h2>
            <div className="icon-group">
              <div className="skill-item">
                <img src={ngxIcon} alt="Nginx" />
                <div className="tooltip">
                 <span className="tooltip-description" >웹 서버 및 Dev Ops ∣ </span> <span className="tooltip-description-sub">Web Server</span>
                  <div className="tooltip-title">Nginx</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={tomcatIcon} alt="Apache Tomcat" />
                <div className="tooltip">
                 <span className="tooltip-description" >웹 서버 및 Dev Ops ∣ </span> <span className="tooltip-description-sub">Web Server</span>
                  <div className="tooltip-title">Apache Tomcat</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={awsIcon} alt="EC2" />
                <div className="tooltip">
                  <span className="tooltip-description" >클라우드 인프라 ∣ </span> <span className="tooltip-description-sub">AWS</span>
                  <div className="tooltip-title">EC2</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={routIcon} alt="Route" />
                <div className="tooltip">
                  <span className="tooltip-description" >클라우드 인프라 ∣ </span> <span className="tooltip-description-sub">AWS</span>
                  <div className="tooltip-title">Route 53</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={sslIcon} alt="SSL" />
                <div className="tooltip">
                  <span className="tooltip-description" >클라우드 인프라 ∣ </span> <span className="tooltip-description-sub">AWS</span>
                  <div className="tooltip-title">SSL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time/API */}
          <div className="grid-item">
            <h2 className="section-title">Real-Time / API ㄱ</h2>
            <div className="icon-group">
              <div className="skill-item">
                <img src={sokIcon} alt="WebSocket" />
                <div className="tooltip">
                 <span className="tooltip-description" >실시간 통신 및 API ∣ </span> <span className="tooltip-description-sub">실시간 통신</span>
                  <div className="tooltip-title">WebSocket</div>
                </div>
              </div>
              <div className="skill-item">
                <img src={swgIcon} alt="Swagger" />
                <div className="tooltip">
                  <span className="tooltip-description" >실시간 통신 및 API ∣ </span> <span className="tooltip-description-sub">API 문서화</span>
                  <div className="tooltip-title">Swagger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Skill;