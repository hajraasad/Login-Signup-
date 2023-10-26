import {Outlet,useParams} from "react-router-dom";

export default function Post(props) {

    const { slug } = useParams();

    const post = props.p[slug];
    if(!post) {
        return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = post;

    return (
        <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}