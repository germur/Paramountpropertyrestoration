# Sistema Unificado de Componentes Restoration

## 🎯 Problema Resuelto

Hemos consolidado más de 15 componentes dispersos en un sistema modular de 6 componentes principales que cubren todas las necesidades de restoration.

## 🧩 Componentes Unificados

### 1. RestoreHero
- **Propósito**: Hero section con título, descripción, badges y CTAs
- **Props**: title, description, ctaText, backgroundImage, badges, emergencyPhone
- **Uso**: Todas las páginas de restoration

### 2. RestoreProcess  
- **Propósito**: Proceso paso a paso con iconos y timeline
- **Props**: title, steps[], timeline
- **Uso**: Mostrar cómo trabajamos

### 3. RestoreServices
- **Propósito**: Lista/grid/cards de servicios incluidos
- **Props**: title, services[], layout ("grid"|"cards"|"list")
- **Uso**: Qué incluye el servicio

### 4. RestoreWarnings
- **Propósito**: Señales de alerta y urgencia
- **Props**: title, warnings[], variant ("warning"|"danger"|"info")
- **Uso**: Cuándo llamar, señales de emergencia

### 5. RestoreFeatures
- **Propósito**: Por qué elegirnos, características
- **Props**: title, features[], layout ("list"|"grid"|"cards")
- **Uso**: Ventajas competitivas

### 6. RestoreFAQ
- **Propósito**: Preguntas frecuentes con acordeón
- **Props**: title, faqs[], maxVisible
- **Uso**: Responder dudas comunes

## 🔄 Template Unificado

**UnifiedTemplate.astro** reemplaza todos los templates específicos:
- ✅ Usa los 6 componentes modulares
- ✅ Configuración automática según el tipo de servicio
- ✅ Contenido enriquecido del contentEnricher
- ✅ Responsive y accesible

## 🎨 Sistema de Estilos

**restoration-unified.css** proporciona:
- Variables CSS unificadas
- Clases base reutilizables
- Sistema de colores consistente
- Responsive design integrado

## 📁 Archivos Eliminados

Se removieron componentes redundantes:
- EmergencyIncludes, EmergencySigns, WaterSigns, StormDamages
- WhyActingFast, WhatNotToDo, WhyEssential, MicroBenefits
- ServiceCards, WhyChooseUs, ServiceHighlights
- Sus respectivos archivos CSS

## 🚀 Beneficios

1. **Mantenimiento**: 6 componentes vs 15+ anteriores
2. **Consistencia**: Estilos y comportamiento unificados
3. **Performance**: Menos CSS y JS cargado
4. **Escalabilidad**: Fácil agregar nuevos servicios
5. **DX**: Desarrollo más rápido y predecible

## 📝 Uso

```astro
<!-- Antes: múltiples imports y configuraciones -->
import WaterTemplate from "./WaterTemplate.astro";
import FireTemplate from "./FireTemplate.astro";
// ... más templates

<!-- Ahora: un solo template -->
import UnifiedTemplate from "./UnifiedTemplate.astro";
<UnifiedTemplate group={groupData} sub={subData} />
```

El sistema detecta automáticamente el tipo de servicio y configura los componentes apropiadamente.