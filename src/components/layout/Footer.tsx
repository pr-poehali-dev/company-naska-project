import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="font-bold text-lg">Название компании</span>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4">
              Краткое описание деятельности вашей компании. Здесь можно добавить свой текст о том, чем вы занимаетесь.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Mail" size={18} className="text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Phone" size={18} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/wholesale" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="ChevronRight" size={14} />
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/development" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="ChevronRight" size={14} />
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="ChevronRight" size={14} />
                  Клиенты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="ChevronRight" size={14} />
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="ChevronRight" size={14} />
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Icon name="ChevronRight" size={14} />
                  Реквизиты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Свяжитесь с нами</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="text-primary mt-0.5" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="text-primary mt-0.5" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                <span>Ваш адрес</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Название компании. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
