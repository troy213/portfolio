import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <div className='hero'>
          {/* navbar section */}
          <header>
            <h2 className='title'>Portfolio</h2>
            <nav>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/'>About</a>
                </li>
                <li>
                  <a href='/'>Experience</a>
                </li>
                <li>
                  <a href='/'>Projects</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
                <li>
                  <i className='fa fa-moon-o'></i>
                </li>
              </ul>
            </nav>
          </header>
          {/* navbar section end*/}

          {/* hero section */}
          <div className='hero-info'>
            <div className='hero-info-desc'>
              <h1 className='hero-info-title'>Hi, I'm Tritera Erlangga</h1>
              <h2 className='hero-info-subtitle'>Junior Web Developer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                rerum sit voluptatem, eos temporibus corrupti, quaerat veritatis
                veniam iusto deleniti modi ducimus possimus aliquid, nisi velit
                assumenda sunt! Nisi, rem.
              </p>
              <button className='hero-info-button'>Contact</button>
            </div>
            <div className='hero-info-blob'>
              <img src='' alt='blob' />
            </div>
          </div>
        </div>
        {/* hero section end */}

        {/* about section */}
        <div className='about'>
          <h2>About Me</h2>
          <h3>
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
            <img src='' alt='about-img' className='about-avatar' />
            <div className='about-info-details'>
              <h3>Details</h3>
              <p>Nama: Tritera Erlangga</p>
              <p>Age: 25 Years</p>
              <p>Location: Pamulang, South Tangerang, Banten, Indonesia</p>
            </div>
          </div>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            libero tenetur soluta rem consectetur qui reprehenderit ipsum quae
            repellendus vero nihil esse asperiores, voluptatibus molestias,
            accusantium provident quod, dolores a!
          </p>
          <button>Download CV</button>
          <button>Donate</button>
        </div>
        {/* about section end */}

        {/* experiences section */}
        <div className='experiences'>
          <h2>Experiences</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sed mollitia non velit officiis exercitationem earum voluptas
            repudiandae repellendus fuga aspernatur laudantium consectetur
            nostrum, ad quod placeat vitae perspiciatis architecto.
          </p>
          <hr />
          <h3>Educations</h3>
          <div className='experiences-info'>
            <div>
              <p className='experiences-info-title'>Niomic</p>
              <p>
                <em>2019 - current</em>
              </p>
            </div>
            <div>
              <p className='experiences-info-title'>Online Coding Bootcamp</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <div className='experiences-info-location'>
                <i className='fas fa-map-marker-alt'></i>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div className='experiences-info'>
            <div>
              <p className='experiences-info-title'>Budiluhur University</p>
              <p>
                <em>Sep 2014 - Mar 2018</em>
              </p>
            </div>
            <div>
              <p className='experiences-info-title'>
                Bachelor (S1) - Computer Science
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <div className='experiences-info-location'>
                <i className='fas fa-map-marker-alt'></i>
                <p>South Jakarta</p>
              </div>
            </div>
          </div>
          <div className='experiences-info'>
            <div>
              <p className='experiences-info-title'>SMAN 9 Tangerang Selatan</p>
              <p>
                <em>2010 - 2013</em>
              </p>
            </div>
            <div>
              <p className='experiences-info-title'>Science Major</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <div className='experiences-info-location'>
                <i className='fas fa-map-marker-alt'></i>
                <p>South Tangerang</p>
              </div>
            </div>
          </div>

          <h3>Career</h3>
          <div className='experiences-info'>
            <div>
              <p className='experiences-info-title'>ICT</p>
              <p>
                <em>2014 - current</em>
              </p>
            </div>
            <div>
              <p className='experiences-info-title'>Office Administrator</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore dicta non eius ab saepe, omnis eos, voluptas porro
                cumque accusantium, repellat molestiae. Quos vitae pariatur
                nulla praesentium, in natus quod.
              </p>
              <div className='experiences-info-location'>
                <i className='fas fa-map-marker-alt'></i>
                <p>South Tangerang</p>
              </div>
            </div>
          </div>
        </div>
        {/* experiences section end */}

        {/* skills section */}
        <div className='skills'>
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit,
            dolor at, eos commodi obcaecati repellendus cum inventore illo
            laboriosam sapiente, sit doloribus expedita. Aspernatur odio cum
            voluptatum commodi saepe.
          </p>
          <hr />
          <h3>Computer Skills</h3>
          <div>
            <p className='skills-title'>HTML</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>CSS</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>Javascript</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>PHP</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>Java</p>
            <div className='progress-bar'></div>
          </div>
          <h3>Other</h3>
          <div>
            <p className='skills-title'>Microsoft Office</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>Adobe</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>Macro Toolworks</p>
            <div className='progress-bar'></div>
          </div>
          <h3>Languages</h3>
          <div>
            <p className='skills-title'>Indonesia</p>
            <div className='progress-bar'></div>
          </div>
          <div>
            <p className='skills-title'>English</p>
            <div className='progress-bar'></div>
          </div>
        </div>
        {/* skills section end */}

        {/* project section */}
        <div className='projects'>
          <h2>Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum
            quas vel id earum vero rerum aliquid ducimus, eligendi quam nemo
            quisquam quibusdam. Rem enim hic dolores beatae officiis dicta!
          </p>
          <hr />
          <div className='projects-card'>
            <div className='projects-card-items'>card</div>
            <div className='projects-card-items'>card</div>
            <div className='projects-card-items'>card</div>
          </div>
        </div>
        {/* project section end */}

        {/* contact section */}
        <div className='contact'>
          <h2>Contact</h2>
          <div className='contact-form'>
            <div>
              <p>name</p>
            </div>
            <div>
              <input type='text' />
            </div>
          </div>
          <div className='contact-form'>
            <div>
              <p>name</p>
            </div>
            <div>
              <input type='text' />
            </div>
          </div>
          <div className='contact-form'>
            <div>
              <p>name</p>
            </div>
            <div>
              <textarea name='' id='' cols='30' rows='10'></textarea>
            </div>
          </div>
          <button>Send</button>
        </div>
        {/* contact section end */}

        <footer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            qui sequi commodi laudantium soluta eos mollitia omnis accusantium,
            obcaecati dolores maiores aspernatur modi repellendus? Fugiat itaque
            libero ex officiis animi!
          </p>
          <button>Back To Top</button>
          <div>
            <div>
              <a href='/'>
                <i className='icon'></i>
                Instagram
              </a>
            </div>
            <div>
              <a href='/'>
                <i className='icon'></i>
                Facebook
              </a>
            </div>
            <div>
              <a href='/'>
                <i className='icon'></i>
                Github
              </a>
            </div>
            <div>
              <a href='/'>
                <i className='icon'></i>
                Linkedin
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
