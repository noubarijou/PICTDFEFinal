import "./style.scss";

/* Font Awesome */
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Membros = [
  {
    id: 1,
    nome: "Luiz Gustavo",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/fotoluiz.png",
    github: "https://github.com/luizinbrzado",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-luiz.png",
    linkedin: "https://www.linkedin.com/in/luizinbrzado",
  },
  {
    id: 2,
    nome: "Paulo Ventura",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/paulo.jpeg",
    github: "https://github.com/noubarijou",
    githubImg:
      "https://alucar-t1-g4.s3.amazonaws.com/membros/github-paulo2.png",
    linkedin: "https://www.linkedin.com/in/paulo-ventura-50079913/",
  },
  {
    id: 3,
    nome: "Andre Ribeiro",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/andre.jpg",
    github: "https://github.com/AndreRibeiro07",
    githubImg: "https://alucar-t1-g4.s3.amazonaws.com/membros/github-andre.png",
    linkedin: "https://www.linkedin.com/in/andrerbr/",
  },
  {
    id: 4,
    nome: "Jennifer Mayumi",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/jenny.jpeg",
    github: "https://github.com/jennimay",
    githubImg:
      "https://alucar-t1-g4.s3.amazonaws.com/membros/github-jenni2.png",
    linkedin: "https://www.linkedin.com/in/mundodajeje",
  },
  {
    id: 5,
    nome: "Nelson Kobayashi",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/nelson.jpg",
    github: "https://github.com/NelsonKobayashi",
    githubImg:
      "https://alucar-t1-g4.s3.amazonaws.com/membros/github-nelson.png",
    linkedin: "https://www.linkedin.com/in/nelsonkobayashi",
  },
  {
    id: 6,
    nome: "Nathalia Vieira",
    foto: "https://alucar-t1-g4.s3.amazonaws.com/membros/nath.jpeg",
    github: "https://github.com/nathsilvavieira",
    githubImg:
      "https://alucar-t1-g4.s3.amazonaws.com/membros/github-nathalia.png",
    linkedin: "https://www.linkedin.com/in/nathalia-vieira93/",
  },
];

export const Perfil = () => {
  return (
    <>
      <section id="section-profile">
        {Membros?.map(
          ({ id, nome, foto, github, githubImg, linkedin, linkedinImg }) => {
            return (
              <div className="perfil-container" key={id}>
                <figure>
                  <img
                    className="img-photo"
                    src={foto}
                    alt={`foto de perfil ${nome} `}
                  />
                </figure>

                <h4>{nome}</h4>

                <div className="icones">
                  <a href={github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>
            );
          }
        )}
      </section>
    </>
  );
};
