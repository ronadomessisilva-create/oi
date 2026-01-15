
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // Signals for dynamic data handling if needed in future, 
  // keeping strictly to the provided copy for now.
  currentDate = signal('14/01/2026');
  
  features = [
    'Sem fogão',
    'Sem forno',
    'Sem ovos',
    'Sem complicação'
  ];

  bonuses = [
    {
      title: 'BÔNUS 1 – Bases Lucrativas',
      desc: 'Bases simples que combinam com vários recheios e facilitam a produção.'
    },
    {
      title: 'BÔNUS 2 – Combinações que Mais Vendem',
      desc: 'Sugestões de sabores que os clientes mais compram.'
    },
    {
      title: 'BÔNUS 3 – Precificação Simples',
      desc: 'Como cobrar o preço certo e garantir lucro em cada venda.'
    }
  ];

  targetAudience = [
    'Quem nunca vendeu nada',
    'Quem já vende doces e quer mais lucro',
    'Donas de casa',
    'Confeitarias, padarias e vendas por encomenda',
    'Quem quer ganhar dinheiro com sobremesas simples'
  ];

  scrollToOffer() {
    const element = document.getElementById('offer-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
