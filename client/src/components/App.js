import React from 'react'
import Navbar from './Navbar'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import blob from '../assets/blob.svg'
import avatar from '../assets/Hero.jpg'

const App = () => {
  return (
    <>
      {/* hero section */}
      <div className='bg-hero'>
        <div className='container'>
          <Navbar />

          <div className='hero'>
            <div className='hero-info'>
              <div className='hero-info-desc'>
                <h1 className='hero-info-title'>Hi, I'm Tritera Erlangga</h1>
                <h2 className='hero-info-subtitle'>Junior Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores rerum sit voluptatem, eos temporibus corrupti, quaerat
                  veritatis veniam iusto deleniti modi ducimus possimus aliquid,
                  nisi velit assumenda sunt! Nisi, rem.
                </p>
                <button className='btn btn-primary'>Contact</button>
              </div>
              <div className='hero-info-blob'>
                <img src={blob} alt='blob' className='blob' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* about section */}
      <div className='container'>
        <div className='about'>
          <h2 className='text-center'>About Me</h2>
          <h3 className='text-center'>
            <em>I'm a Junior Web Developer</em>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            voluptatem facere quam accusantium recusandae adipisci architecto,
            rerum quod atque. Ipsam in voluptatum dolores, quae placeat nisi
            voluptatibus doloremque voluptate voluptates!
          </p>
          <hr />
          <div className='about-info'>
            <img src={avatar} alt='about-img' className='about-avatar' />
            <div className='about-info-details'>
              <h3>Details</h3>
              <p>
                <i className='fa fa-user'></i> Name: Tritera Erlangga
              </p>
              <p>
                <i className='fa fa-calendar'></i> Age: 25 Years
              </p>
              <p>
                <i className='fa fa-map-marker'></i> Location: Pamulang, South
                Tangerang, Banten, Indonesia
              </p>
            </div>
          </div>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            libero tenetur soluta rem consectetur qui reprehenderit ipsum quae
            repellendus vero nihil esse asperiores, voluptatibus molestias,
            accusantium provident quod, dolores a!
          </p>
          <div className='about-button'>
            <button className='btn btn-primary'>
              Download CV <i className='fa fa-download'></i>
            </button>
            <button className='btn btn-secondary'>Donate</button>
          </div>
        </div>
      </div>
      {/* about section end */}

      {/* experiences section */}
      <div className='container'>
        <div className='experiences'>
          <h2 className='text-center'>Experiences</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sed mollitia non velit officiis exercitationem earum voluptas
            repudiandae repellendus fuga aspernatur laudantium consectetur
            nostrum, ad quod placeat vitae perspiciatis architecto.
          </p>
          <hr />
          <h3>Educations</h3>
          <div className='experiences-info'>
            <div className='experiences-info-title'>
              <p>Niomic</p>
              <p>
                <em>2019 - current</em>
              </p>
            </div>
            <div>
              <p>Online Coding Bootcamp</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <p>
                <em>
                  <i className='fa fa-map-marker'></i> Online
                </em>
              </p>
            </div>
          </div>
          <div className='experiences-info'>
            <div className='experiences-info-title'>
              <p>Budiluhur University</p>
              <p>
                <em>Sep 2014 - Mar 2018</em>
              </p>
            </div>
            <div>
              <p>Bachelor (S1) - Computer Science</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <p>
                <em>
                  <i className='fa fa-map-marker'></i> South Jakarta
                </em>
              </p>
            </div>
          </div>
          <div className='experiences-info'>
            <div className='experiences-info-title'>
              <p>SMAN 9 Tangerang Selatan</p>
              <p>
                <em>2010 - 2013</em>
              </p>
            </div>
            <div>
              <p>Science Major</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <p>
                <em>
                  <i className='fa fa-map-marker'></i> South Tangerang
                </em>
              </p>
            </div>
          </div>

          <h3>Career</h3>
          <div className='experiences-info'>
            <div className='experiences-info-title'>
              <p>ICT</p>
              <p>
                <em>2014 - current</em>
              </p>
            </div>
            <div>
              <p>Office Administrator</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <p>
                <em>
                  <i className='fa fa-map-marker'></i> South Tangerang
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* experiences section end */}

      {/* skills section */}
      <div className='container'>
        <div className='skills'>
          <h2 className='text-center'>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit,
            dolor at, eos commodi obcaecati repellendus cum inventore illo
            laboriosam sapiente, sit doloribus expedita. Aspernatur odio cum
            voluptatum commodi saepe.
          </p>
          <hr />
          <h3>Computer Skills</h3>
          <div className='skills-item'>
            <p>HTML</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>CSS</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Javascript</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>PHP</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Java</p>
            <div className='progress-bar'></div>
          </div>
          <h3>Other</h3>
          <div className='skills-item'>
            <p>Microsoft Office</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Adobe</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Macro Toolworks</p>
            <div className='progress-bar'></div>
          </div>
          <h3>Languages</h3>
          <div className='skills-item'>
            <p>Indonesia</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>English</p>
            <div className='progress-bar'></div>
          </div>
        </div>
      </div>
      {/* skills section end */}

      {/* project section */}
      <div className='container'>
        <div className='projects'>
          <h2 className='text-center'>Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum
            quas vel id earum vero rerum aliquid ducimus, eligendi quam nemo
            quisquam quibusdam. Rem enim hic dolores beatae officiis dicta!
          </p>
          <hr />
          <div className='projects-card'>
            <div className='projects-card-item'>card</div>
            <div className='projects-card-item'>card</div>
            <div className='projects-card-item'>card</div>
          </div>
        </div>
      </div>
      {/* project section end */}

      {/* contact section */}
      <div className='container'>
        <div className='contact'>
          <h2 className='text-center'>Contact</h2>
          <div className='contact-form'>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <input type='text' />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input type='text' />
                  </td>
                </tr>
                <tr>
                  <td>Message</td>
                  <td>
                    <textarea name='' id='' cols='30' rows='10'></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='contact-form'>
            <button className='btn btn-primary'>Send</button>
          </div>
        </div>
      </div>
      {/* contact section end */}

      <div className='bg-footer'>
        <div className='container'>
          <footer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              qui sequi commodi laudantium soluta eos mollitia omnis
              accusantium, obcaecati dolores maiores aspernatur modi
              repellendus? Fugiat itaque libero ex officiis animi!
            </p>
            <div className='footer-btn'>
              <button className='btn btn-secondary'>Back To Top</button>
            </div>
            <div className='footer-link'>
              <div>
                <a href='/'>
                  <i className='fa fa-instagram'></i>&nbsp; Instagram
                </a>
              </div>
              <div>
                <a href='/'>
                  <i className='fa fa-facebook'></i>&nbsp; Facebook
                </a>
              </div>
              <div>
                <a href='/'>
                  <i className='fa fa-github'></i>&nbsp;Github
                </a>
              </div>
              <div>
                <a href='/'>
                  <i className='fa fa-linkedin'></i>&nbsp;Linkedin
                </a>
              </div>
            </div>
            <p className='copyright text-center'>
              Copyright &copy; 2021 Tritera Erlangga. All Rights Reserved
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
