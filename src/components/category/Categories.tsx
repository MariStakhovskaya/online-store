import styles from '../category/Categories.module.css';
export function Categories() {
  const category: Array<string> = [
    'senior',
    'middle',
    'junior',
    'student1 rss',
    'trainee',
    'mentor',
  ];
  return (
    <div className={styles.check}>
      {category.map((item, index) => (
        <label key={index}>
          <input type="checkbox" />
          <p>{item}</p>
        </label>
      ))}
    </div>
  );
}

export default Categories;
