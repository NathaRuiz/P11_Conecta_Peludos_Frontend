/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor' : '#002A48', 
        'secondaryColor' : '#FF0060',
        'tertiaryColor' : '#7FE8E1', 
        'quarteryColor' : '#F6FA70',
        'urgente' : '#B70202',
        'disponible' : '#3FB23D',
        'acogida' : '#B08CE2',
        'adoptado' : '#22A3EB',
        'reservado': '#F38300',
        'male' : '#8EB1E5',
        'female' : '#F672E1',
        'secondaryLetterColor':'#5F5B5B',
      },
    },
  },
  plugins: [],
}

