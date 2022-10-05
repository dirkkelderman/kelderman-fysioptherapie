import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, footer, children }) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
