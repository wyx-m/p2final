export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        backgroundColor:'white',
        // Background 
        backgroundImage: `url(https://img-bsy.txrpic.com/Element/00/89/11/82/e1293bd4_E891182_ac6ec26bXZ.png?imageMogr2/quality/90/thumbnail/320x%3E)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '75px',
        // Size
        width: '80px',
        height: '80px',
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: 'calc(-70% - 40px - 26px)', 
        top: 'calc(50% - 26px)', 
        // Layering
        zIndex: '100',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '20px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    },
    
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '116px',
        right: '24px',
        // Size
        width: '420px',
        height: '530px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #7a39e0`,
        //overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        zIndex:100,
    },

    
}