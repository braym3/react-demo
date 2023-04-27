import PropTypes from 'prop-types';

const ComponentWithProps = ({header, content, number, nonexistent}) => (
    <div className='content'>
        <h1>{header}</h1>
        <p>{content}</p>
        <p>Number = {number}</p>
        <p>Nonexistent = {nonexistent}</p>
    </div>
);

ComponentWithProps.defaultProps = {
    header: `This is the default heading`,
    content: `This is the default content`,
    number: 1,
    nonexistent: `Default non-existent`
};

ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    nonexistent: PropTypes.string.isRequired
};

export default ComponentWithProps;