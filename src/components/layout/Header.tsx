import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-3xl font-bold">Н</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">ООО НАСКА</h1>
              <p className="text-xs text-muted-foreground">Технологии и торговля</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Главная
            </Link>
            <Link 
              to="/wholesale" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/wholesale') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Оптовая торговля
            </Link>
            <Link 
              to="/development" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/development') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Разработка ПО
            </Link>
            <Link 
              to="/clients" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/clients') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Клиенты
            </Link>
            <Link 
              to="/contacts" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contacts') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Контакты
            </Link>
          </nav>
          
          <a href="tel:+79598902377">
            <Button className="gap-2">
              <Icon name="Phone" size={18} />
              <span className="hidden sm:inline">+7 (959) 890-23-77</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
