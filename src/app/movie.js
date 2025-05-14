import React from 'react';

const HomePage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
                padding: '1rem',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '500px',
                }}
            >
                <video
                    width="100%"
                    controls
                    style={{
                        border: '3px solid #ccc',
                        borderRadius: '8px',
                        maxWidth: '100%',
                    }}
                >
                    <source src="/aaaa.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1
                    style={{
                        color: '#ccc',
                        fontSize: '20px',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}
                >
                    Um trecho da nossa história, esse é meu pequeno gesto de amor mas do meu jeitinho
                </h1>
            </div>
        </div>
    );
};

export default HomePage;

// import React from 'react';

// const HomePage = () => {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//             <video
//                 width="410"
//                 height="450"
//                 controls
//                 style={{ border: '3px solid #ccc', borderRadius: '8px' }}
//             >
//                 <source src="/aaaa.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
            
//                 <h1 style={{ color: '#ccc', fontSize: '30px', marginLeft: '20px'  }}>
//                     Um trecho da nossa história, essse é meu pequeno gesto de amor mas do meu jeitinho 
//                 </h1>     
//         </div>
//     );
// };

// export default HomePage;