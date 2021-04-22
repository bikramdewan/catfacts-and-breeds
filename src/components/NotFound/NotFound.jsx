import FeedbackPanel from './../FeedbackPanel';

const NotFound = () => {
    return <FeedbackPanel 
        title={'Page not found'}
        description={'The page you\'ve requested does not exist'}
    />
}

export default NotFound;