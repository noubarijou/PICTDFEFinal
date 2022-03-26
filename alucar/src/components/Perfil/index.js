
import './style.scss';


let Membros = [
  {
    id: 1,
    nome: "Luiz Gustavo",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/fotoluiz.png",
    github: "https://github.com/luizinbrzado",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-luiz.png",
    linkedin: "https://www.linkedin.com/in/luizinbrzado",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 2,
    nome: "Paulo Ventura",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-luiz.png",
    github: "https://github.com/noubarijou",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-paulo2.png",
    linkedin: "https://www.linkedin.com/in/paulo-ventura-50079913/",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 3,
    nome: "Andre Ribeiro",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/andre.jpg",
    github: "https://github.com/AndreRibeiro07",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-andre.png",
    linkedin: "https://www.linkedin.com/in/andrerbr/",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 4,
    nome: "Jennifer Mayumi",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/jenny.jpeg",
    github: "https://github.com/jennimay",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-jenni2.png",
    linkedin: "https://www.linkedin.com/in/mundodajeje",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 5,
    nome: "Nelson Kobayashi",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/nelson.jpg",
    github: "https://github.com/NelsonKobayashi",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-nelson.png",
    linkedin: "https://www.linkedin.com/in/nelsonkobayashi",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  },
  {
    id: 6,
    nome: "Nathalia Vieira",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/nath.jpeg",
    github: "https://github.com/nathsilvavieira",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-nathalia.png",
    linkedin: "https://www.linkedin.com/in/nathalia-vieira93/",
    linkedinImg: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
  }
];


export const Perfil = () => {


  return (
    <>
      <section id='section-profile'>
        <h2>Equipe Alucar</h2>

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