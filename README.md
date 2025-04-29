# **zen-debug**

Um módulo simples e poderoso para depuração e registro de logs em aplicações Node.js. Ele fornece um sistema de log estruturado com níveis de severidade e captura exceções não tratadas e rejeições de promessas.

## **Instalação**

Instale o módulo via npm:

```bash
npm install zen-debug
```

## **Uso**

### **Importação**

Importe o `logger` para registrar mensagens no console:

```javascript
import { logger } from "zen-debug";
```

### **Funções do Logger**

- **`logger.info(message)`**: Registra mensagens informativas.
- **`logger.conn(message)`**: Registra mensagens relacionadas a conexões.
- **`logger.warn(message)`**: Registra mensagens de aviso.
- **`logger.error(message)`**: Registra mensagens de erro ou objetos de erro.

#### **Exemplo**

```javascript
import { logger } from "zen-debug";

logger.info("Mensagem informativa.");
logger.conn("Conexão estabelecida.");
logger.warn("Aviso importante.");
logger.error("Erro crítico.");
```

### **Debugger**

O `Debugger` captura exceções não tratadas e rejeições de promessas automaticamente ao importar o módulo.

---

## **Saída de Log**

As mensagens são formatadas com timestamps e cores para facilitar a leitura:

- **INFO**: Verde
- **CONN**: Azul
- **WARN**: Amarelo
- **ERROR**: Vermelho

---

## **Licença**

Licenciado sob a licença CC-BY-ND-4.0
