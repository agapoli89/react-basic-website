const Article = ({ title, author, text }) => {

    const styles = {
        marginTop: "10px",
    }

    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase",
                fontSize: 20,
            }}>{title}</h3>
            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: 12,
            }}>{author}</span>
            <p style={{
                fontSize: 14,
                marginBottom: 15,
            }}>{text}</p>
        </article>
    );
}
 
export default Article;