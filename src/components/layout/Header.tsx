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
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-bold tracking-tight">Название компании</h1>
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
              Услуги
            </Link>
            <Link 
              to="/development" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/development') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              О нас
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
          
          <Button className="gap-2">
            <Icon name="Phone" size={18} />
            <span className="hidden sm:inline">Контакт</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;