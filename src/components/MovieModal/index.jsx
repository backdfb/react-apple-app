import { imageBasePath } from "../../constant"
import './MovieModal.css'

const MovieModal = ({
    backgrop_path,
    title, 
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen}) => {
  return (
    <div className="presentation" role="presentation">
        <div className="wrapper-modal">
            <div className="modal">
                <span
                    onClick={() => setModalOpen(false)}
                    className="modal-close"
                >
                    X
                </span>

                <img 
                    className="modal__poster-img"
                    src={`${imageBasePath}${backgrop_path}`}
                    alt="modal_poaster-img"
                />

                <div className="modal__content">
                <p className="modal__details">
                <span>
                    100% for you
                </span>{" "}
                {release_date ? release_date : first_air_date}
                </p>
                <h2 className="modal__title">
                    {title ? title : name}
                </h2>
                <p clasName="modal__overview">평점: {vote_average}</p>
                <p clasName="modal__overview">{overview}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index