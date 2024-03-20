import PropTypes from 'prop-types';

function Main(props) {
    return (
        <main className='main'>
            {props.children}
        </main>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};

export default Main;