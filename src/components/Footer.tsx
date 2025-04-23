const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2024 Бухгалтерия.Инфо. Проект по информатике.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Контакты
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;