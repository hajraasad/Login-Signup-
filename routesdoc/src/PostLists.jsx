import {Link} from "react-router-dom";

export default function PostLists(props) {
    return (
        <ul>
            {Object.entries(props.p).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}>
                        <h3>{title}</h3>
                    </Link>

                </li>
            ))}
        </ul>
    );
}