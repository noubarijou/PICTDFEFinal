
import './style.scss';


let Membros = [
  {
    id: 1,
    nome: "Luiz Gustavo",
    foto: "https://media.discordapp.net/attachments/950486648389525554/950559189346971679/unknown.png?width=297&height=413",
    github: "https://github.com/luizinbrzado",
    githubImg: "https://cdn.discordapp.com/attachments/872490351561150474/918938370590277632/github-luiz2.png",
    linkedin: "https://www.linkedin.com/in/luizinbrzado",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 2,
    nome: "Paulo Ventura",
    foto: "https://media.discordapp.net/attachments/950486648389525554/950558012467195914/squintyIs.jpeg?width=210&height=373",
    github: "https://github.com/noubarijou",
    githubImg: "https://cdn.discordapp.com/attachments/872490351561150474/918938370305036309/github-paulo2.png",
    linkedin: "https://www.linkedin.com/in/paulo-ventura-50079913/",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 3,
    nome: "Andre Ribeiro",
    foto: "https://media.discordapp.net/attachments/950486648389525554/950554800544694322/IMG_20211209_163019108_HDR2.jpg?width=355&height=374",
    github: "https://github.com/AndreRibeiro07",
    githubImg: "https://cdn.discordapp.com/attachments/872490351561150474/918938370896441434/github-andre2.png",
    linkedin: "https://www.linkedin.com/in/andrerbr/",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 4,
    nome: "Jennifer Mayumi",
    foto: "https://media.discordapp.net/attachments/950486648389525554/950557578939756594/jenny.jpeg?width=374&height=374",
    github: "https://github.com/jennimay",
    githubImg: "https://cdn.discordapp.com/attachments/872490351561150474/918938371206811658/github-jenni2.png",
    linkedin: "https://www.linkedin.com/in/mundodajeje",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 5,
    nome: "Nelson Kobayashi",
    foto: "https://media.discordapp.net/attachments/950486648389525554/950558757581127751/foto_perfil.jpg?width=283&height=413",
    github: "https://github.com/NelsonKobayashi",
    githubImg: "https://cdn.discordapp.com/attachments/872490351561150474/918938370024038410/github-nelson2.png",
    linkedin: "https://www.linkedin.com/in/nelsonkobayashi",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 6,
    nome: "Nathalia Vieira",
    foto: "https://media.discordapp.net/attachments/950486648389525554/950545654009192508/47C4714A-8236-4752-BE97-FA0805D9A564.jpeg?width=413&height=413",
    github: "https://github.com/nathsilvavieira",
    githubImg: "https://media.discordapp.net/attachments/950486648389525554/950548327420796988/github-nathalia.png?width=489&height=413",
    linkedin: "https://www.linkedin.com/in/nathalia-vieira93/",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  }
];


export const Perfil = () => {


  return (
    <>
      <h2>Equipe Alucar</h2>
      <section id='section-profile'>
        
        {Membros?.map(
          ({ id, nome, foto, github, githubImg, linkedin, linkedinImg }) => {
            return (
              <article key={id}>
                <div className='perfil-container'>
                  <img id='img-photo' src={foto} alt='avatar' />

                  <h3>{nome}</h3>

                  <div className='icones'>
                    <a href={github} target='_blank' rel='noreferrer'>
                      <img src={githubImg} alt='github' />
                    </a>
                    <a href={linkedin} target='_blank' rel='noreferrer'>
                      <img src={linkedinImg} alt='linkedin' />
                    </a>

                  </div>
                </div>
              </article>
            );
          }
        )}
      </section>
    </>
  );
};