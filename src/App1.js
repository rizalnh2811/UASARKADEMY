import React, {Component} from 'react'
import './App1.css'
import logo from './reactt.png'
import logo1 from './call.png';
class App1 extends Component {
    render() {

        return (
            <div className="wrapper gambar">
                <div className="wrapper">
                    <div className="wrapper-top">
                        <div className="top-name">
                            <h1>Save your Earth</h1>
                            <h4>Menanam satu pohon,    menghasilkan sejuta manfaat.</h4>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                    <div style={styles.parentButton}>
                      <img src={logo}
                        style={styles.logoPohon}
                        alt="Pohon" />
                      <div style={styles.Readmore}>
                        Donasi Pohon
                            </div>
                    </div>
                    <div style={styles.parentButton1}>
                      <img src={logo1} alt="Telepon"
                        style={styles.logoTelepon} />
                      <div style={styles.Readmore1}>
                        Hubungi Kami
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

const styles = {
    parentButton: {
        display: "flex",
        borderColor: "transparent",
        borderStyle: "solid",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        margin: 16,
        marginLeft: 200,
        background: "#00B894",
        fontFamily: "Pangolin",
    },
    Readmore: {
        color: "#FFF",
        marginTop: -20,
        margin: 14,
        marginRight: 50,
        marginLeft: 20,
    },
    parentButton1: {
        display: "flex",
        borderStyle: "solid",
        borderColor: "#00B894",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        margin: 16,
        background: "rgba(0, 184, 148, 0.1)",
        fontFamily: "Pangolin",
    },
    Readmore1: {
        color: "#00B894",
        margin: 14,
        marginRight: 50,
        marginLeft: 20,
    },
    tulisan: {
        fontFamily: "Pangolin",
        fontWeight: "normal",
        marginTop: 180,
        marginLeft: 100,
    },
    tulisanPohon: {
        marginLeft: 100,
        fontFamily: "pangolin",
        fontWeight: "normal",
    },
    logoPohon: {
      width: "10%",
      height: "8%",
      marginTop: 12,
      marginLeft: 10,
    },
    logoTelepon: {
      width: "8%",
      height: "8%",
      marginTop: 15,
      marginLeft: 10,
    },
    wrapperButton: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center"
    }
}

export default App1;