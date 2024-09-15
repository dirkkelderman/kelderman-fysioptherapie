import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewFooter } from "./NewFooter";

export const Layout = ({ navigation, settings, footer, children }) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <NewFooter footer={footer} settings={settings} />
      {/* <Footer footer={footer} /> */}
    </div>
  );
};
