class CalculadoraVendas {
  constructor(custoTotalIngredientes, precoFinalVenda) {
    if (custoTotalIngredientes < 0 || precoFinalVenda < 0) {
      throw new Error("Os valores não podem ser negativos.");
    }

    this.custoTotalIngredientes = custoTotalIngredientes;
    this.precoFinalVenda = precoFinalVenda;
  }

  calcularMargemLucroPorUnidade() {
    return this.precoFinalVenda - this.custoTotalIngredientes;
  }

  calcularUnidadesParaMeta(metaLucro = 800) {
    if (metaLucro < 0) {
      throw new Error("A meta de lucro não pode ser negativa.");
    }

    const margemPorUnidade = this.calcularMargemLucroPorUnidade();

    if (margemPorUnidade <= 0) {
      throw new Error(
        "O preço de venda deve ser maior que o custo dos ingredientes.",
      );
    }

    return Math.ceil(metaLucro / margemPorUnidade);
  }
}

const salesForm = document.querySelector("#sales-form");
const unitProfit = document.querySelector("#unit-profit");
const unitsNeeded = document.querySelector("#units-needed");
const goalValue = document.querySelector("#goal-value");
const message = document.querySelector("#message");
const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

salesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredientCost = Number(
    document.querySelector("#ingredient-cost").value,
  );
  const salePrice = Number(document.querySelector("#sale-price").value);
  const weeklyGoal = Number(document.querySelector("#weekly-goal").value);

  try {
    const calculator = new CalculadoraVendas(ingredientCost, salePrice);
    const unitsForGoal = calculator.calcularUnidadesParaMeta(weeklyGoal);
    unitProfit.textContent = currency.format(
      calculator.calcularMargemLucroPorUnidade(),
    );
    goalValue.textContent = currency.format(weeklyGoal);
    unitsNeeded.textContent = unitsForGoal;
    message.textContent = "";
  } catch (error) {
    message.textContent = error.message;
    goalValue.textContent = currency.format(0);
    unitProfit.textContent = currency.format(0);
    unitsNeeded.textContent = "0";
  }
});
